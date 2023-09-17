package org.curtapraia.domain.beach;

import org.curtapraia.exception.InternalServerErrorException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class SqlBeachRepository implements BeachRepository {
    private final DataSource dataSource;
    private final Logger logger = LoggerFactory.getLogger(SqlBeachRepository.class);

    public SqlBeachRepository(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public List<Beach> getBeaches() {
        List<Beach> beaches = new ArrayList<>();

        try (Connection connection = dataSource.getConnection();
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT * FROM PRAIA")) {

            while (resultSet.next()) {
                beaches.add(makeBeach(resultSet));
            }
        } catch (SQLException e) {
            logger.error("[GET-BEACHES] Error executing SQL query: {}", e.getMessage());
            throw new InternalServerErrorException();
        }
        return beaches;
    }

    private List<BeachImage> getBeachImages(int beachId) throws SQLException {
        List<BeachImage> beachImages = new ArrayList<>();

        try(Connection connection = dataSource.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT id, url, principal FROM PRAIA_IMAGEM WHERE id_praia = ?")) {
            preparedStatement.setInt(1, beachId);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    beachImages.add(makeBeachImage(resultSet));
                }
            }
        }
        return beachImages;
    }

    private Beach makeBeach(ResultSet resultSet) throws SQLException {
        int id = resultSet.getInt("id");
        String name = resultSet.getString("nome");
        String city = resultSet.getString("cidade");
        String neighbourhood = resultSet.getString("bairro");
        String description = resultSet.getString("descrição");
        String restaurantsUrl = resultSet.getString("urlRestaurantes");
        String lodgingUrl = resultSet.getString("urlHospedagens");
        List<BeachImage> images = getBeachImages(id);

        return new Beach(id, name, city, neighbourhood, description, restaurantsUrl, lodgingUrl, images);
    }

    private BeachImage makeBeachImage(ResultSet resultSet) throws SQLException {
        int id = resultSet.getInt("id");
        String url = resultSet.getString("url");
        Boolean isMainImage = resultSet.getBoolean("principal");

        return new BeachImage(id, url, isMainImage);
    }
}