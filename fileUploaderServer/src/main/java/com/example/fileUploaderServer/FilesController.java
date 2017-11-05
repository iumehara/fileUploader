package com.example.fileUploaderServer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;

@RestController
@RequestMapping("files")
public class FilesController {

    @GetMapping()
    public HashMap<String, String> get() {
        HashMap<String, String> map = new HashMap<>();
        map.put("greeting", "hello");
        return map;
    }

    @GetMapping("/photo")
    public byte[] getPhoto() throws IOException, URISyntaxException {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();


        Path path1 = Paths.get(getClass().getClassLoader().getResource("kitten.jpg").toURI());


        Path path = Paths.get("./kitten.jpg");
        byte[] bytes = Files.readAllBytes(path1);
        return bytes;
    }
}
