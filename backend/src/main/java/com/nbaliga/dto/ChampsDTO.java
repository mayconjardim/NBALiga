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
        this.season = entity.getSeason();
        this.league = entity.getLeague();
        this.champ = entity.getChamp();
        this.loser = entity.getLoser();
        this.champWins = entity.getChampWins();
        this.loserWins = entity.getLoserWins();
    }
}
