package org.curtapraia.domain.beach;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeachService {
    private final BeachRepository beachRepository;

    public BeachService(BeachRepository beachRepository) {
        this.beachRepository = beachRepository;
    }

    public List<Beach> getBeaches() {
        return this.beachRepository.getBeaches();
    }
}