package org.curtapraia.secret;

public interface SecretVault {
    String getSecret(String secretName);
}