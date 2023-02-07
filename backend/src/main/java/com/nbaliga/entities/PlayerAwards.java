package com.nbaliga.entities;

import com.nbaliga.entities.keys.PlayAwardsKey;
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
@IdClass(PlayAwardsKey.class)
public class PlayerAwards implements Serializable {

    @Id
    private Integer season;
    @Id
    private String award;
    private String player;


}
