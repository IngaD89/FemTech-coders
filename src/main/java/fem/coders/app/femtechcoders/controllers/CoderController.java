package fem.coders.app.femtechcoders.controllers;


import fem.coders.app.femtechcoders.exceptions.ResourceNotFoundException;
import fem.coders.app.femtechcoders.models.Coder;
import fem.coders.app.femtechcoders.repositories.CoderRepository;
import fem.coders.app.femtechcoders.services.CoderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequestMapping("/api")
public class CoderController {

    private CoderService coderService;
    private CoderRepository coderRepository;

    @Autowired
    public CoderController(CoderService coderService, CoderRepository coderRepository) {
        this.coderService = coderService;
        this.coderRepository = coderRepository;
    }

    @GetMapping("/")
    public List<Coder> allCoders() {
        return coderRepository.findAll();
    }

    @GetMapping("/coders/{id}")
    public Coder findById(@PathVariable Long id) {
        return coderRepository.findById(id).orElse(null);
    }

   @PostMapping(value = "/add", produces = "application/json")
    public ResponseEntity <Coder> saveCoder(@RequestBody Coder coder) throws URISyntaxException {
        Coder savedCoder = coderRepository.save(coder);
        return ResponseEntity.created(new URI("/coders/" + savedCoder.getId())).body(savedCoder);
    }


    @PutMapping("/coders/edit/{id}")
    public ResponseEntity<Coder> edit(@PathVariable Long id) throws ResourceNotFoundException {
        Coder coder = coderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Coder not found"));
        coderRepository.save(coder);
        return ResponseEntity.ok().body(coder);
    }

    @DeleteMapping("/coders/{id}")
    public ResponseEntity<Coder> delete(@PathVariable Long id) throws ResourceNotFoundException {
        Coder coder = coderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Coder not found"));
        coderRepository.deleteById(id);
        return ResponseEntity.ok().body(coder);
    }
}