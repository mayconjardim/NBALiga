package com.nbaliga.dto;

import com.nbaliga.entities.Champs;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class ChampsDTO implements Serializable {

    private Long season;
    private Integer league;
    private String champ;
    private String loser;
    private Integer champWins;
    private Integer loserWins;

    public ChampsDTO(Champs entity) {
        season = entity.getSeason();
        league = entity.getLeague();
        champ = entity.getChamp();
        loser = entity.getLoser();
        champWins = entity.getChampWins();
        loserWins = entity.getLoserWins();
    }
}
