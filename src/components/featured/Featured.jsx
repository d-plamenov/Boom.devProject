import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Featured.module.scss";

export default function Featured({ items = [] }) {
  const router = useRouter();
  return (
    <div>
      <Container>
        <ImageList cols={6} variant="quilted" gap={20}>
          {items.map((item) => (
            <ImageListItem
              key={item.image}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                src={item.image}
                onClick={() => {
                  router.push(item.image);
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}
