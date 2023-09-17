package org.curtapraia.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "gcp.secret")
@Getter
@Setter
public class SecretsProperties {
    private String databaseName;
    private String username;
    private String password;
    private String instanceConnectionName;
}