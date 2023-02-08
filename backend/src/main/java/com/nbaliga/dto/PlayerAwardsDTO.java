package com.nbaliga.dto;

import com.nbaliga.entities.PlayerAwards;
import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class PlayerAwardsDTO implements Serializable {

    private Integer season;
    private String award;
    private Long player;

    public PlayerAwardsDTO(PlayerAwards entity) {
        season = entity.getSeason();
        award = entity.getAward();
        player = entity.getPlayer();
    }
}
