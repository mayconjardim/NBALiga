package com.nbaliga.entities;

import com.nbaliga.entities.keys.ScheduleKey;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@IdClass(ScheduleKey.class)
public class Schedule implements Serializable {

    @Id
    private Integer day;
    @Id
    private String home;
    @Id
    private String away;
    private Integer league;
    private Integer type;
    private Integer homeScore;
    private Integer awayScore;
    private String boxName;
    private Integer playerOfGameId;
    private String playerOfGame;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "seasonDay")
    @JoinColumn(name = "team")
    @Fetch(FetchMode.SELECT)
    private List<PlayerGameStats> playerGameStats = new ArrayList<>();

}
