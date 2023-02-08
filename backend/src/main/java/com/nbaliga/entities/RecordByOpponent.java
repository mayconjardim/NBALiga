package com.nbaliga.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
public class RecordByOpponent implements Serializable {

    @Id
    private Integer teamId;
    @Id
    private Integer oppId;
    private Integer totalWins;
    private Integer totalLosses;
    private Integer points;
    @Id
    private Integer seasonWins;
    @Id
    private Integer seasonLosses;
    private Integer playoffWins;
    private Integer playoffLosses;
    private Integer playoffSeriesWins;
    private Integer playoffSeriesLosses;

}
