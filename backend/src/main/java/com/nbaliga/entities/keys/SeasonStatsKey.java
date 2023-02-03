package com.nbaliga.entities.keys;

import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class SeasonStatsKey implements Serializable {

    private Integer minutes;
    private Integer rebounds;
    private Integer assists;
    private Integer steals;
    private Integer points;

}
