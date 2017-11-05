package com.example.fileUploaderServer;

import org.junit.Before;
import org.junit.Test;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.fileUpload;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

public class FilesControllerTest {
    private MockMvc mockController;

    @Before
    public void setUp() throws Exception {
        FilesController filesController = new FilesController();
        mockController = standaloneSetup(filesController).build();
    }

    @Test
    public void test_get_returnsFile() throws Exception {
        mockController.perform(get("/files"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.greeting", equalTo("hello")));
    }

    @Test
    public void test_getPhoto_returnsByteArray() throws Exception {
        mockController.perform(get("/files/photo"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", notNullValue()));
    }

    @Test
    public void test_savePhoto_returnsCreatedForValidData() throws Exception {
        MockMultipartFile multipartFile = new MockMultipartFile(
                "image",
                "kitten.jpg",
                "image/jpeg",
                "abcde".getBytes()
        );

        mockController.perform(fileUpload("/files").file(multipartFile))
                .andExpect(status().isCreated());
    }

    @Test
    public void test_savePhoto_returnsBadRequestForInvalidData() throws Exception {
        MockMultipartFile multipartFile = new MockMultipartFile(
                "invalid name",
                "kitten.jpg",
                "image/jpeg",
                "abcde".getBytes()
        );

        mockController.perform(fileUpload("/files").file(multipartFile))
                .andExpect(status().isBadRequest());
    }
}
