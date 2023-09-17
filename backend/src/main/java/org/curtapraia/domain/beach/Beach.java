package org.curtapraia.domain.beach;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.List;

@Data
@AllArgsConstructor
public class Beach {
    private Integer id;
    private String name;
    private String city;
    private String neighbourhood;
    private String description;
    private String restaurantsUrl;
    private String lodgingUrl;
    private List<BeachImage> images;
}