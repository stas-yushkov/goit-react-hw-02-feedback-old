import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  const makeColor = value => {
    const maxColor = 144;
    const someColorShift = 50;

    return `hsl(${(value * maxColor) / 100 + someColorShift}deg 100% 50%)`;
  };

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: makeColor(percentage) }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd']).isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
