package org.curtapraia.domain.beach;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BeachImage {
    private int id;
    private String url;
    private Boolean isMainImage;
}