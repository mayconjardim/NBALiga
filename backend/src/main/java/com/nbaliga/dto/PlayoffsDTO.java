package com.nbaliga.dto;

import com.nbaliga.entities.Playoffs;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class PlayoffsDTO implements Serializable {


    private Long seriesId;
    private Integer league;
    private Boolean complete;
    private String team1;
    private String team2;
    private Integer wins1;
    private Integer wins2;

    public PlayoffsDTO(Playoffs entity) {
        this.seriesId = entity.getSeriesId();
        this.league = entity.getLeague();
        this.complete = entity.getComplete();
        this.team1 = entity.getTeam1();
        this.team2 = entity.getTeam2();
        this.wins1 = entity.getWins1();
        this.wins2 = entity.getWins2();
    }

}
