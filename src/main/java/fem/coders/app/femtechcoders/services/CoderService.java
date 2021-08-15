package fem.coders.app.femtechcoders.services;

import fem.coders.app.femtechcoders.models.Coder;

import fem.coders.app.femtechcoders.repositories.CoderRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class CoderService {

    private final CoderRepository coderRepository;

    public CoderService(CoderRepository coderRepository) {
        this.coderRepository = coderRepository;
    }

    public List<Coder> allCoders() {
        return coderRepository.findAll();
    }



    public  void save(Coder coder) {
        coderRepository.save(coder);
    }


    public void findById(@PathVariable Long id) {
       coderRepository.findById(id).orElse(null);
    }


    public void delete(@PathVariable Long id) {
        coderRepository.deleteById(id);

    }
}


