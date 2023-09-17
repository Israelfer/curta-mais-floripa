package org.curtapraia.secret.gcp;

import com.google.cloud.spring.secretmanager.SecretManagerTemplate;
import org.curtapraia.secret.SecretVault;
import org.springframework.stereotype.Component;

@Component
public class SecretManager implements SecretVault {
    private final SecretManagerTemplate secretManagerTemplate;

    public SecretManager(SecretManagerTemplate secretManagerTemplate) {
        this.secretManagerTemplate = secretManagerTemplate;
    }

    @Override
    public String getSecret(String secretName) {
        return secretManagerTemplate.getSecretString(secretName);
    }
}