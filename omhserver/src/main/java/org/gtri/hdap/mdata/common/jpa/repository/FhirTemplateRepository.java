package org.gtri.hdap.mdata.common.jpa.repository;

import org.gtri.hdap.mdata.common.jpa.entity.FhirTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FhirTemplateRepository extends JpaRepository<FhirTemplate, String> {
    FhirTemplate findOneByTemplateId(String templateId);
}
