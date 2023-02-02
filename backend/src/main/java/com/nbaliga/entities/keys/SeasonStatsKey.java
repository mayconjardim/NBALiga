package com.nbaliga.entities.keys;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SeasonStatsKey implements Serializable {

    private Integer minutes;
    private Integer rebounds;
    private Integer assists;
    private Integer steals;
    private Integer points;

}
