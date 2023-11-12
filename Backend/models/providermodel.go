// providermodel.go

package models

// Provider struct represents the social media account provider model
type Provider struct {
	Name     string      `json:"name"`
	Username string      `json:"username"`
	Token    string      `json:"token"`
	Details  interface{} `json:"details,omitempty"`
}

// InstagramProvider struct represents details for Instagram provider
type InstagramProvider struct {
	ProfileURL string `json:"profile_url"`
	// Add other Instagram-specific fields
}

// YouTubeProvider struct represents details for YouTube provider
type YouTubeProvider struct {
	ChannelURL string `json:"channel_url"`
	// Add other YouTube-specific fields
}

// TelegramProvider struct represents details for Telegram provider
type TelegramProvider struct {
	ChatID string `json:"chat_id"`
	// Add other Telegram-specific fields
}

// FacebookProvider struct represents details for Facebook provider
type FacebookProvider struct {
	ProfileURL string `json:"profile_url"`
	// Add other Facebook-specific fields
}

// LinkedInProvider struct represents details for LinkedIn provider
type LinkedInProvider struct {
	ProfileURL string `json:"profile_url"`
	// Add other LinkedIn-specific fields
}

// TwitterProvider struct represents details for Twitter provider
type TwitterProvider struct {
	ProfileURL string `json:"profile_url"`
	// Add other Twitter-specific fields
}

// NewProvider creates a new Provider instance with the specified social media platform
func NewProvider(name, username, token string, platform string, details interface{}) *Provider {
	var providerDetails interface{}
	switch platform {
	case "Instagram":
		providerDetails = details.(InstagramProvider)
	case "YouTube":
		providerDetails = details.(YouTubeProvider)
	case "Telegram":
		providerDetails = details.(TelegramProvider)
	case "Facebook":
		providerDetails = details.(FacebookProvider)
	case "LinkedIn":
		providerDetails = details.(LinkedInProvider)
	case "Twitter":
		providerDetails = details.(TwitterProvider)
	}

	return &Provider{
		Name:     name,
		Username: username,
		Token:    token,
		Details:  providerDetails,
	}
}
