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
public class SeasonInfo implements Serializable {

    @Id
    private Integer Season;
    private Integer SeasonDay;

}
