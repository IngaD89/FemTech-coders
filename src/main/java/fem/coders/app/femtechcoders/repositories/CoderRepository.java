package fem.coders.app.femtechcoders.repositories;

import fem.coders.app.femtechcoders.models.Coder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoderRepository extends JpaRepository<Coder, Long> {

}
