package org.curtapraia.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.curtapraia.secret.SecretVault;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class ConnectionPoolConfiguration {
    private final String databaseName;
    private final String username;
    private final String password;
    private final String instanceConnectionName;

    public ConnectionPoolConfiguration(SecretVault secretVault, SecretsProperties secretsProperties) {
        this.databaseName = secretVault.getSecret(secretsProperties.getDatabaseName());
        this.username = secretVault.getSecret(secretsProperties.getUsername());
        this.password = secretVault.getSecret(secretsProperties.getPassword());
        this.instanceConnectionName = secretVault.getSecret(secretsProperties.getInstanceConnectionName());
    }

    @Bean
    public DataSource getDatasource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(String.format("jdbc:mysql:///%s", this.databaseName));
        config.setUsername(this.username);
        config.setPassword(this.password);
        config.setMaximumPoolSize(10);
        config.addDataSourceProperty("socketFactory", "com.google.cloud.sql.mysql.SocketFactory");
        config.addDataSourceProperty("cloudSqlInstance", this.instanceConnectionName);
        config.addDataSourceProperty("ipTypes", "PUBLIC,PRIVATE");

        return new HikariDataSource(config);
    }
}