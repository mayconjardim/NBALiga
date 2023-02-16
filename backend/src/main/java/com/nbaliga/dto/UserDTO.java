package com.nbaliga.dto;

import com.nbaliga.entities.Role;
import com.nbaliga.entities.User;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class UserDTO implements Serializable {

    private Long id;
    private String user;
    private String team;
    private String password;

    private Set<Role> roles = new HashSet<>();

    public UserDTO(User entity) {
        id = entity.getId();
        user = entity.getUser();
        team = entity.getTeam();
        password = entity.getPassword();
    }
}
