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
public class Playoffs implements Serializable {

    @Id
    private Long seriesId;
    private Integer league;
    private Boolean complete;
    private String team1;
    private String team2;
    private Integer wins1;
    private Integer wins2;
}
