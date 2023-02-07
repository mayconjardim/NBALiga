package com.nbaliga.dto;

import com.nbaliga.entities.Awards;
import com.nbaliga.entities.keys.AwardsKey;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class AwardsDTO implements Serializable {

    private Integer season;

    private String award;

    private Long playerId;
    private String player;
    private String position;
    private String team;
    private Double ppg;
    private Double rpg;
    private Double apg;
    private Double spg;
    private Double bpg;

    public AwardsDTO(Awards entity) {
        season = entity.getSeason();
        award = entity.getAward();
        playerId = entity.getPlayerId();
        player = entity.getPlayer();
        position = entity.getPosition();
        team = entity.getTeam();
        ppg = entity.getPpg();
        rpg = entity.getRpg();
        apg = entity.getApg();
        spg = entity.getSpg();
        bpg = entity.getBpg();
    }
}
