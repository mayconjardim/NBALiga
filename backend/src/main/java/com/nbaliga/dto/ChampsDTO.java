package com.nbaliga.dto;

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

}
