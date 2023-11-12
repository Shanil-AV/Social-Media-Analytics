
package controllers

import (
	"github.com/gin-gonic/gin"
	"Backend/models"
	"net/http"
)


type AnalyticsController struct {
	
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

	
	existingAnalytics := models.NewAnalytics()

	// Update the analytics data based on the request
	existingAnalytics.AddLikes(analyticsRequest.Month, analyticsRequest.Likes)
	existingAnalytics.AddComments(analyticsRequest.Month, analyticsRequest.Comments)
	existingAnalytics.AddPosts(analyticsRequest.Month, analyticsRequest.Posts)
	existingAnalytics.AddFollowers(analyticsRequest.Month, analyticsRequest.Followers)



	c.JSON(http.StatusOK, gin.H{"message": "Analytics updated successfully", "analytics": existingAnalytics})
}
