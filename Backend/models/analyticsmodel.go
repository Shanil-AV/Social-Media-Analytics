

package models

// Analytics struct represents the analytics model
type Analytics struct {
	Likes     map[string]int `json:"likes"`     // Likes in different months
	Comments  map[string]int `json:"comments"`  // Comments in different months
	Posts     map[string]int `json:"posts"`     // Posts in different months
	Followers map[string]int `json:"followers"` // Followers in different months
}

// NewAnalytics creates a new Analytics instance
func NewAnalytics() *Analytics {
	return &Analytics{
		Likes:     make(map[string]int),
		Comments:  make(map[string]int),
		Posts:     make(map[string]int),
		Followers: make(map[string]int),
	}
}

// AddLikes adds the number of likes for a specific month
func (a *Analytics) AddLikes(month string, likes int) {
	a.Likes[month] += likes
}

// AddComments adds the number of comments for a specific month
func (a *Analytics) AddComments(month string, comments int) {
	a.Comments[month] += comments
}

// AddPosts adds the number of posts for a specific month
func (a *Analytics) AddPosts(month string, posts int) {
	a.Posts[month] += posts
}

// AddFollowers adds the number of followers for a specific month
func (a *Analytics) AddFollowers(month string, followers int) {
	a.Followers[month] += followers
}

