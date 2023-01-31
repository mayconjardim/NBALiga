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
public class Champs implements Serializable {

    @Id
    private Long season;
    private Integer league;
    private String champ;
    private String loser;
    private Integer champWins;
    private Integer loserWins;

}
