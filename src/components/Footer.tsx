export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div id="footer" className="footer">
            <p>Copyright &copy; {year} Gabe Lynch</p>
        </div>
    );
};