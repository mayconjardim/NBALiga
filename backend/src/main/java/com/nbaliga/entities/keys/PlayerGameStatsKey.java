package com.nbaliga.entities.keys;

import lombok.*;

import javax.persistence.Id;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class PlayerGameStatsKey implements Serializable {

    private Long id;
    private Integer seasonDay;
    private String team;
    private String opponent;

}
