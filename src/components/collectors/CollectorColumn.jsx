import Collector from "./Collector";
import styles from "./CollectorColumn.module.scss";

export default function CollectorColumn({items = []}) {
    return (
        <div className={styles.column}>
            <div>
            {items.map((item, index) => {
                return index % 2 == 0
                    ? <Collector {...item} type={"darker"} key={index} />
                    : <Collector {...item} type={"lighter"} key={index} />
            })}
            </div>
        </div>
    )
}