package com.nbaliga.dto;

import com.nbaliga.entities.Role;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class RoleDTO implements Serializable {

    private Long id;
    private String authority;

    public RoleDTO(Role role) {
        super();
        id = role.getId();
        authority = role.getAuthority();
    }

}
