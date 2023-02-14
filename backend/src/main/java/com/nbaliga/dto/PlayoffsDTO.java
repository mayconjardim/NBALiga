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
        seriesId = entity.getSeriesId();
        league = entity.getLeague();
        complete = entity.getComplete();
        team1 = entity.getTeam1();
        team2 = entity.getTeam2();
        wins1 = entity.getWins1();
        wins2 = entity.getWins2();
    }

}
