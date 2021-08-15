package fem.coders.app.femtechcoders;


import fem.coders.app.femtechcoders.models.Coder;
import fem.coders.app.femtechcoders.repositories.CoderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class IntegrationTest {

    @Autowired
    MockMvc mockMvc;

    private CoderRepository coderRepository;

    public IntegrationTest(CoderRepository coderRepository) {
        this.coderRepository = coderRepository;
    }


    @Test
    void returnsCodersList() throws Exception {
        List<Coder> coders = List.of(
                new Coder(1L, "Inga", "Demetrashvili", "31", "(+34) 642 52 22 05", "inga.demetrashvili.1@iliauni.edu.ge", "Georgia", "Universitario", "Aragó 37, bjs-1", "FemTech P1"),
                new Coder(2L, "Ina", "Demetra", "31", "(+34) 642 52 22 05", "inga.d_1@gmail.com", "Georgia", "University", "Aragó 37, 1-1", "FemTech P1")

        );
        coderRepository.saveAll(coders);

        mockMvc.perform(get("/coders"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Inga")))
                .andExpect(jsonPath("$[0].lastName", equalTo("Demetrashvili")))
                .andExpect(jsonPath("$[0].age", equalTo("31")))
                .andExpect(jsonPath("$[0].phoneNumber", equalTo("(+34) 642 52 22 05")))
                .andExpect(jsonPath("$[0].eMail", equalTo("inga.demetrashvili.1@iliauni.edu.ge")))
                .andExpect(jsonPath("$[0].country", equalTo("Georgia")))
                .andExpect(jsonPath("$[0].studies", equalTo("Universitario")))
                .andExpect(jsonPath("$[0].address", equalTo("Aragó 37, bjs-1")))
                .andExpect(jsonPath("$[0].promotion", equalTo("FemTech P1")))
                .andExpect(jsonPath("$[1].name", equalTo("Ina")))
                .andExpect(jsonPath("$[1].lastName", equalTo("Demetra")))
                .andExpect(jsonPath("$[1].age", equalTo("31")))
                .andExpect(jsonPath("$[1].phoneNumber", equalTo("(+34) 642 52 22 05")))
                .andExpect(jsonPath("$[1].eMail", equalTo("inga.d_1@gmail.com")))
                .andExpect(jsonPath("$[1].country", equalTo("Georgia")))
                .andExpect(jsonPath("$[1].studies", equalTo("University")))
                .andExpect(jsonPath("$[1].address", equalTo("Aragó 37, 1-1")))
                .andExpect(jsonPath("$[1].promotion", equalTo("FemTech P1")));
    }
}


