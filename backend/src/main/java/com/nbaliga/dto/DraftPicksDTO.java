package com.nbaliga.dto;

import com.nbaliga.entities.DraftPicks;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class DraftPicksDTO implements Serializable {

    private Long id;
    private String team;
    private Integer year;
    private Integer round;
    private String ownedby;
    private Integer value;
    private Integer selection;

    public DraftPicksDTO(DraftPicks entity) {
        id = entity.getId();
        team = entity.getTeam();
        year = entity.getYear();
        round = entity.getRound();
        ownedby = entity.getOwnedby();
        value = entity.getValue();
        selection = entity.getSelection();
    }

}
