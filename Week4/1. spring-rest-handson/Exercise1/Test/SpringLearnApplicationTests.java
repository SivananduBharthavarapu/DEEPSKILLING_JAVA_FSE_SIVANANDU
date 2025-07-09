package com.cognizant.Spring_learn;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SpringLearnApplicationTests {

	@Autowired
	private TestRestTemplate restTemplate;

	@Test
	void helloEndpointReturnsExpectedString() {
		ResponseEntity<String> response = restTemplate.getForEntity("/hello", String.class);
		assertThat(response.getBody()).isEqualTo("Hello, Spring Boot!");
	}
}
