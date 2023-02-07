package com.nbaliga.entities.keys;

import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class PlayAwardsKey implements Serializable {

    private Integer season;
    private String award;
    private Long player;
}
