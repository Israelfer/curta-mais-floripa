package org.curtapraia.domain.beach;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/beach")
public class BeachController {
    private final BeachService beachService;

    public BeachController(BeachService beachService) {
        this.beachService = beachService;
    }

    @GetMapping
    public List<Beach> getBeaches() {
        return beachService.getBeaches();
    }
}