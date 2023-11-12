package main

import (
	"fmt"
	"github.com/GoAdminGroup/go-admin/engine"
	"github.com/GoAdminGroup/go-admin/modules/config"
	"github.com/GoAdminGroup/go-admin/modules/language"
	"github.com/GoAdminGroup/themes/adminlte"
	"github.com/gin-gonic/gin"
	"github.com/gocql/gocql"
	"net/http"
)

func main() {

	router := gin.Default()

	admin := engine.Default()

	cfg := &config.Config{
		Databases: config.DatabaseList{
			"default": {
				Host:   "127.0.0.1",
				Port:   "9042",
				User:   "your_cassandra_user",
				Pwd:    "your_cassandra_password",
				Name:   "your_keyspace_name",
				Driver: "cql",
				Dsn:    "127.0.0.1:9042",
				Params: map[string]string{},
			},
		},
		UrlPrefix: "admin",
		IndexUrl:  "/",
		Debug:     true,
		Language:  language.EN,
		Theme:     adminlte.Adminlte.ThemeName,
	}

	admin.AddConfig(cfg).
		AddGenerators().
		Use(router)

	router.GET("/", func(c *gin.Context) {
		fmt.Fprint(c.Writer, "Hello, World! This is the main page.")
	})

	http.ListenAndServe(":3000", router)
}

// initCassandraConnection initializes a connection to Cassandra and returns a session
func initCassandraConnection() (interface{}, error) {
	cluster := gocql.NewCluster("127.0.0.1")
	cluster.Keyspace = "your_keyspace_name"
	session, err := cluster.CreateSession()
	return session, err
}
