package com.example.fileUploaderServer;

import org.junit.Test;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

public class FilesControllerTest {

    @Test
    public void test_get_returnsFile() throws Exception {
        FilesController filesController = new FilesController();

        MockMvc mockController = standaloneSetup(filesController).build();

        mockController.perform(get("/files"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", equalTo("this is a file")));
    }
}
