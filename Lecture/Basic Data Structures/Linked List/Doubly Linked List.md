คือ Linked List ที่แต่ละ Node เก็บ pointer **สองตัว** แทนที่จะเป็นตัวเดียวเหมือน Singly Linked List 
1. **Data** — ค่าข้อมูล
2. **Next** — pointer ไปยัง Node ถัดไป
3. **Prev** — pointer ไปยัง Node ก่อนหน้า

![[Pasted image 20260926185801.png]]
การมี pointer ทั้งสองทิศทางทำให้เรา**เดินย้อนกลับ (backward traversal)** ได้ และที่สำคัญกว่านั้นคือ **เมื่อเรามี reference ไปยัง Node ใดๆ อยู่แล้ว เราสามารถลบหรือแทรกข้างๆ Node นั้นได้ในเวลา O(1) โดยไม่ต้องเดินหา Node ก่อนหน้า** ซึ่งเป็นจุดอ่อนที่สุดของ SLL

### เปรียบเทียบกับ Singly Linked List: Memory Overhead และ Pointer Management
**Memory Overhead**
DLL ใช้หน่วยความจำมากกว่า SLL อย่างชัดเจน เพราะทุก Node ต้องเก็บ pointer เพิ่มอีกหนึ่งตัว (`prev`) สมมติว่า pointer หนึ่งตัวใช้ 8 bytes (บนระบบ 64-bit) และ data ใช้ 8 bytes:

|     | SLL ต่อ Node |     |
| --- | ------------ | --- |
|     |              |     |

