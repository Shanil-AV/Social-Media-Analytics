package main

import (
	
	"fmt"
	"net/http"
	"github.com/GoAdminGroup/go-admin/engine"
	"github.com/GoAdminGroup/go-admin/modules/config"
	"github.com/GoAdminGroup/go-admin/modules/language"
	"github.com/GoAdminGroup/themes/adminlte"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	// Initialize a Gin engine
	router := gin.Default()

	// Initialize GoAdmin
	admin := engine.Default()

	// Configuration for GoAdmin
	cfg := &config.Config{
		Databases: config.DatabaseList{
			"default": {
				Driver: config.DriverSqlite,
				File:   "./your_database_name.db", // Change the file name accordingly
				ConnMaxLifetime: 0,                 // Set to 0 for SQLite
				MaxIdleConns:    0,                 // Set to 0 for SQLite
				MaxOpenConns:    0,                 // Set to 0 for SQLite
				
			},
		},
		UrlPrefix: "admin",
		IndexUrl:  "/",
		Debug:     true,
		Language:  language.EN,
		Theme:     adminlte.Adminlte.ThemeName,
	}

	// Initialize routes for GoAdmin
	admin.AddConfig(cfg).
		AddGenerators( /* Add your generators here */ ).
		Use(router)

	// Setup an HTTP server on port 3000
	router.GET("/", func(c *gin.Context) {
		fmt.Fprint(c.Writer, "Hello, World! This is the main page.")
	})

	// Start the server
	http.ListenAndServe(":3000", router)
}
