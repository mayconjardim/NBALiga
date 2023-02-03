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
public class DraftPicks implements Serializable {

    @Id
    private Long id;
    private String team;
    private Integer year;
    private Integer round;
    private String ownedby;
    private Integer value;
    private Integer selection;

}
