// usermodel.go

package models

import (
	"golang.org/x/crypto/bcrypt"
)

// User struct represents the user model
type User struct {
	Username           string      `json:"username"`
	PasswordHash       string      `json:"-"`
	Email              string      `json:"email"`
	ConnectedProviders []*Provider `json:"connected_providers"`
}

// SetPassword hashes and sets the password for a user
func (u *User) SetPassword(password string) error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	u.PasswordHash = string(hashedPassword)
	return nil
}

// CheckPassword verifies if the provided password matches the user's hashed password
func (u *User) CheckPassword(password string) error {
	return bcrypt.CompareHashAndPassword([]byte(u.PasswordHash), []byte(password))
}

// ConnectProvider connects a social media account provider to the user
func (u *User) ConnectProvider(provider *Provider) {
	u.ConnectedProviders = append(u.ConnectedProviders, provider)
}