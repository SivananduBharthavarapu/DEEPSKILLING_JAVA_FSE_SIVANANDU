package com.cognizant.Spring_learn.controller;

import com.cognizant.Spring_learn.model.Country;
import com.cognizant.Spring_learn.service.CountryService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/country")
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/{code}")
    public Country getCountry(@PathVariable String code) throws Exception {
        return countryService.getCountry(code);
    }
}
