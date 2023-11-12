
package controllers

import (
	"github.com/gin-gonic/gin"
	"Backend/models"
	"net/http"
)

// AnalyticsController represents the controller for managing analytics
type AnalyticsController struct {
	// You can add any dependencies or services needed by the controller
}

// NewAnalyticsController creates a new instance of AnalyticsController
func NewAnalyticsController() *AnalyticsController {
	return &AnalyticsController{}
}

// UpdateAnalyticsHandler handles the updating of analytics data
func (controller *AnalyticsController) UpdateAnalyticsHandler(c *gin.Context) {
	var analyticsRequest struct {
		Month      string `json:"month" binding:"required"`
		Likes      int    `json:"likes"`
		Comments   int    `json:"comments"`
		Posts      int    `json:"posts"`
		Followers  int    `json:"followers"`
	}

	if err := c.ShouldBindJSON(&analyticsRequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// You can retrieve the existing analytics data from a database or other storage
	// For this example, we create a new instance each time
	existingAnalytics := models.NewAnalytics()

	// Update the analytics data based on the request
	existingAnalytics.AddLikes(analyticsRequest.Month, analyticsRequest.Likes)
	existingAnalytics.AddComments(analyticsRequest.Month, analyticsRequest.Comments)
	existingAnalytics.AddPosts(analyticsRequest.Month, analyticsRequest.Posts)
	existingAnalytics.AddFollowers(analyticsRequest.Month, analyticsRequest.Followers)

	// You can add additional logic here, such as saving the updated analytics data

	c.JSON(http.StatusOK, gin.H{"message": "Analytics updated successfully", "analytics": existingAnalytics})
}
