
package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/gocql/gocql"
	"Backend/models"
	"net/http"
)

// ProviderController represents the controller for managing providers
type ProviderController struct {
	Session *gocql.Session
}

// NewProviderController creates a new instance of ProviderController 
func NewProviderController(session *gocql.Session) *ProviderController {
	return &ProviderController{Session: session}
}

// CreateProviderHandler handles the creation of a new provider
func (controller *ProviderController) CreateProviderHandler(c *gin.Context) {
	var providerRequest struct {
		Name     string      `json:"name" binding:"required"`
		Username string      `json:"username" binding:"required"`
		Token    string      `json:"token" binding:"required"`
		Platform string      `json:"platform" binding:"required"`
		Details  interface{} `json:"details"`
	}

	if err := c.ShouldBindJSON(&providerRequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create a new provider based on the request
	newProvider := models.NewProvider(
		providerRequest.Name,
		providerRequest.Username,
		providerRequest.Token,
		providerRequest.Platform,
		providerRequest.Details,
	)

	// Insert the new provider into Cassandra
	if err := controller.InsertProvider(newProvider); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating provider"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Provider created successfully", "provider": newProvider})
}

// InsertProvider inserts a new provider into Cassandra
func (controller *ProviderController) InsertProvider(provider *models.Provider) error {
	query := "INSERT INTO providers (name, username, token, platform, details) VALUES (?, ?, ?, ?, ?)"

	return controller.Session.Query(
		query,
		provider.Name,
		provider.Username,
		provider.Token,
		//provider.Platform,
		provider.Details,
	).Exec()
}
