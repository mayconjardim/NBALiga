package com.nbaliga.entities;

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
@Entity
@IdClass(AwardsKey.class)
public class Awards implements Serializable {

    @Id
    private Integer season;
    @Id
    private String award;
    @Id
    private Long playerId;
    private String player;
    private String position;
    private String team;
    private Double ppg;
    private Double rpg;
    private Double apg;
    private Double spg;
    private Double bpg;

}
