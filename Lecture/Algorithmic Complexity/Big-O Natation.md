![[Pasted image 20260922193541.png]]
**Big O Notation** เป็นหนึ่งใน [[Algorithmic Complexity]]  คือสัญกรณ์ทางคณิตศาสตร์ที่ใช้อธิบาย **Time complexity** (เวลาที่อัลกอริทึมใช้ในการทำงาน) และ **Space complexity** (หน่วยความจำที่อัลกอริทึมใช้) โดยวัดเทียบกับขนาดของ input (มักเขียนแทนด้วย `n`)

> [!tip]
> พูดง่ายๆ คือมันตอบคำถามว่า **"ถ้าข้อมูล input โตขึ้น อัลกอริทึมนี้จะช้าลง (หรือกินความจำมากขึ้น) แค่ไหน"**

## Why Big-O Necessary?
### เปรียบเทียบอัลกอริทึมได้อย่างเป็นกลาง
ไม่ต้องพึ่งความเร็วเครื่อง หรือภาษาโปรแกรมมิ่งที่ใช้ เพราะ Big O สนใจแค่ "อัตราการเติบโต" (growth rate) ไม่ใช่เวลาจริงเป็นวินาที
### คาดการณ์ Performance ก่อนใช้งานจริง
โค้ดที่รันเร็วตอน test กับข้อมูล 100 รายการ อาจช้ามากตอนมีข้อมูลจริง 10 ล้านรายการ Big O ช่วยให้เห็นปัญหานี้ล่วงหน้า
### สำคัญมากในการสัมภาษณ์งานสาย Software Engineering
เป็นหัวข้อพื้นฐานที่บริษัทเทคใช้ประเมินความเข้าใจเรื่อง algorithm ของผู้สมัคร

| Big O        | ชื่อเรียก             | ความหมาย                                                                                                             |
| ------------ | --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `O(1)`       | **Constant time**     | <font color="#92d050">เวลาคงที่ ไม่ว่า input จะใหญ่แค่ไหน</font>                                                     |
| `O(log n)`   | **Logarithmic time**  | <font color="#92d050">เวลาเพิ่มช้ามาก แม้ input จะโตเร็ว (เช่น binary search)</font>                                 |
| `O(n)`       | **Linear time**       | <font color="#ffff00">เวลาเพิ่มเป็นสัดส่วนตรงกับ input                             </font>                           |
| `O(n log n)` | **Linearithmic time** | <font color="#de7802">ผสมระหว่าง linear กับ logarithmic (เช่น efficient sorting)                             </font> |
| `O(n²)`      | **Quadratic time**    | <font color="#d83931">เวลาเพิ่มเป็นกำลังสองของ input (มักเจอ nested loop)                             </font>        |
| `O(2ⁿ)`      | **Exponential time**  | <font color="#d83931">เวลาเพิ่มแบบทวีคูณ ใช้ไม่ได้เลยกับ input ขนาดใหญ่</font>                                       |
## Example Code
### O(1) <font color="#92d050">—</font> Constant time
```python
def get_first_element(arr):
    return arr[0]  # เข้าถึง index โดยตรง ไม่ต้องวนลูป
```
ไม่ว่า `arr` จะมี 10 หรือ 10 ล้านตัว เวลาที่ใช้ก็เท่าเดิม

### O(n) <font color="#ffff00">—</font> Linear time
```python
def find_max(arr):
    max_val = arr[0]
    for num in arr:          # วนลูปครั้งเดียวตลอดทั้ง array
        if num > max_val:
            max_val = num
    return max_val
```
ถ้า `arr` มีขนาดใหญ่ขึ้น 2 เท่า เวลาก็จะเพิ่มขึ้นประมาณ 2 เท่าเช่นกัน

### O(n²) — Quadratic time (ปัญหาคลาสสิกที่ต้อง optimize)
```python
def has_duplicate(arr):
    for i in range(len(arr)):
        for j in range(len(arr)):     # nested loop = ตัวการของ O(n²)
            if i != j and arr[i] == arr[j]:
                return True
    return False
```
วิธีนี้เช็คทุกคู่ (pair) ของสมาชิก — ถ้า array มี 1,000 ตัว จะต้องเปรียบเทียบเกือบ 1,000,000 ครั้ง

